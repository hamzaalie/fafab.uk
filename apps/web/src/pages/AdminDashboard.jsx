
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Trash2, CheckCircle2, Eye } from 'lucide-react';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loadingInquiries, setLoadingInquiries] = useState(true);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    fetchInquiries();
    fetchOrders();
  }, []);

  const fetchInquiries = async () => {
    try {
      const records = await pb.collection('contact_inquiries').getFullList({
        sort: '-created',
        $autoCancel: false
      });
      setInquiries(records);
    } catch (error) {
      toast.error('Failed to load inquiries');
      console.error('Fetch inquiries error:', error);
    } finally {
      setLoadingInquiries(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const records = await pb.collection('training_orders').getFullList({
        sort: '-created',
        $autoCancel: false
      });
      setOrders(records);
    } catch (error) {
      toast.error('Failed to load orders');
      console.error('Fetch orders error:', error);
    } finally {
      setLoadingOrders(false);
    }
  };

  const updateInquiryStatus = async (id, status) => {
    try {
      await pb.collection('contact_inquiries').update(id, { status }, { $autoCancel: false });
      toast.success(`Inquiry marked as ${status}`);
      fetchInquiries();
    } catch (error) {
      toast.error('Failed to update status');
      console.error('Update status error:', error);
    }
  };

  const deleteInquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    
    try {
      await pb.collection('contact_inquiries').delete(id, { $autoCancel: false });
      toast.success('Inquiry deleted');
      fetchInquiries();
    } catch (error) {
      toast.error('Failed to delete inquiry');
      console.error('Delete inquiry error:', error);
    }
  };

  const exportInquiriesCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Service Type', 'Message', 'Status', 'Date'];
    const rows = inquiries.map(i => [
      i.name,
      i.email,
      i.phone || '',
      i.service_type,
      i.message,
      i.status,
      new Date(i.created).toLocaleDateString()
    ]);
    
    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `inquiries-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const exportOrdersCSV = () => {
    const headers = ['Customer Name', 'Email', 'Course', 'Amount', 'Status', 'Date'];
    const rows = orders.map(o => [
      o.customer_name,
      o.customer_email,
      o.course_name,
      `£${o.amount}`,
      o.payment_status,
      new Date(o.created).toLocaleDateString()
    ]);
    
    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orders-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <>
      <Helmet>
        <title>Admin dashboard - FAFAB Integrated Facilities</title>
        <meta name="description" content="Admin dashboard for managing contact inquiries and training orders" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-8">Admin dashboard</h1>

              <div className="space-y-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Contact inquiries</CardTitle>
                    <Button onClick={exportInquiriesCSV} variant="outline" size="sm">
                      Export CSV
                    </Button>
                  </CardHeader>
                  <CardContent>
                    {loadingInquiries ? (
                      <div className="text-center py-8">
                        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                      </div>
                    ) : inquiries.length === 0 ? (
                      <div className="text-center py-8">
                        <Eye className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">No inquiries yet</p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Service</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {inquiries.map((inquiry) => (
                              <TableRow key={inquiry.id}>
                                <TableCell className="font-medium">{inquiry.name}</TableCell>
                                <TableCell>{inquiry.email}</TableCell>
                                <TableCell>{inquiry.service_type}</TableCell>
                                <TableCell>{new Date(inquiry.created).toLocaleDateString()}</TableCell>
                                <TableCell>
                                  <Badge variant={inquiry.status === 'New' ? 'default' : inquiry.status === 'Read' ? 'secondary' : 'outline'}>
                                    {inquiry.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <div className="flex gap-2">
                                    {inquiry.status === 'New' && (
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => updateInquiryStatus(inquiry.id, 'Read')}
                                      >
                                        Mark read
                                      </Button>
                                    )}
                                    {inquiry.status !== 'Resolved' && (
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => updateInquiryStatus(inquiry.id, 'Resolved')}
                                      >
                                        <CheckCircle2 className="w-4 h-4" />
                                      </Button>
                                    )}
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      onClick={() => deleteInquiry(inquiry.id)}
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Training orders</CardTitle>
                    <Button onClick={exportOrdersCSV} variant="outline" size="sm">
                      Export CSV
                    </Button>
                  </CardHeader>
                  <CardContent>
                    {loadingOrders ? (
                      <div className="text-center py-8">
                        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                      </div>
                    ) : orders.length === 0 ? (
                      <div className="text-center py-8">
                        <Eye className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">No orders yet</p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Customer</TableHead>
                              <TableHead>Course</TableHead>
                              <TableHead>Amount</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {orders.map((order) => (
                              <TableRow key={order.id}>
                                <TableCell>
                                  <div>
                                    <p className="font-medium">{order.customer_name}</p>
                                    <p className="text-sm text-muted-foreground">{order.customer_email}</p>
                                  </div>
                                </TableCell>
                                <TableCell>{order.course_name}</TableCell>
                                <TableCell>£{order.amount}</TableCell>
                                <TableCell>{new Date(order.created).toLocaleDateString()}</TableCell>
                                <TableCell>
                                  <Badge variant={order.payment_status === 'completed' ? 'default' : order.payment_status === 'pending' ? 'secondary' : 'destructive'}>
                                    {order.payment_status}
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AdminDashboard;
