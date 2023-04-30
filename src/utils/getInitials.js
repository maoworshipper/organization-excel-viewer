export const getInitials = (name) => {
  const names = name?.split(" ");
  let initials = "";
  names.forEach((n) => {
    initials += n[0];
  });
  return initials;
};
