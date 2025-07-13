import 'angular-server-side-configuration/process';
export const environment = {
  baseDomain: process.env['baseDomain'] ?? '',
  httpProtocol: process.env['httpProtocol'] ?? '',
  servicePrefix: process.env['servicePrefix'] ?? ''
};
