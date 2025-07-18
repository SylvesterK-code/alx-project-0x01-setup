import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const UsersPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl">Users Page</h1>
        <p>This page will list users fetched from JSONPlaceholder.</p>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
