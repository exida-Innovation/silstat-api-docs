import React from 'react';
import Layout from '@theme-original/Layout';

let ApiDocProvider = ({ children }) => <>{children}</>;

try {
  const mod = require('docusaurus-theme-openapi-docs');
  if (mod?.ApiDocProvider) {
    ApiDocProvider = mod.ApiDocProvider;
  }
} catch {}

export default function LayoutWrapper(props) {
  return (
    <ApiDocProvider>
      <Layout {...props} />
    </ApiDocProvider>
  );
}