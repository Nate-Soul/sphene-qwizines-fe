export const generateCrumbs = (path) => {
    const parts = path.split('/').filter(part => part !== '');
    const crumbs = [];
  
    parts.forEach((part, index) => {
      const initLink = `/${parts.slice(0, index + 1).join('/')}`;
      const name = part.charAt(0).toUpperCase() + part.slice(1).replace('-', '');
      const isLastSegment = index === parts.length - 1;
      const link = isLastSegment ? null : initLink;
  
      crumbs.push({name, link});
  
    });
  
    return crumbs;
}