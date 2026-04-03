import React from 'react';
import MethodEndpoint from '@theme-original/ApiExplorer/MethodEndpoint';

interface MethodEndpointProps {
  [key: string]: any;
}

export default function MethodEndpointWrapper(props: MethodEndpointProps) {
  return <MethodEndpoint {...props} />;
}
