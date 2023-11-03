interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'Edit personal info', 'Book a table', 'View menus'],
  ownerAbilities: [
    'Manage user information',
    'Manage restaurant information',
    'Create and update restaurant menus',
    'Manage bookings',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/837cb567-11fa-4d65-8e68-401e620b0a9b',
};
