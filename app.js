// To Do Application
let window, dna;

const app = {
   doLunch() {
      dna.clone('task', { title: 'Order bulgogi' });
      dna.clone('task', { title: 'Eat bulgogi' });
      },
   init(thisWindow, thisDna) {
      window = thisWindow;
      dna =    thisDna;
      return app;
      },
   };

export { app };  //app.init(dom.window, dna);
