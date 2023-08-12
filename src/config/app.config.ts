interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'FaceBR',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
