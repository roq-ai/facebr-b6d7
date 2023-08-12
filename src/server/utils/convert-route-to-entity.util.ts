const mapping: Record<string, string> = {
  invitations: 'invitation',
  organizations: 'organization',
  photos: 'photo',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
