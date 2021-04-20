export const classes = (classes: string) => {
  console.log(classes);

  classes.split(' ').forEach((style) => {
    // margin, padding, width, height, border-radius
    if(/^m/.exec(style)) {
      if(/^mt/.exec(style)) {
        console.log('margin-top');
      } else if(/^mb/.exec(style)) {
        console.log('margin-bottom');
      }
    }
  });
};
