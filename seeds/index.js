
const seedUser = require('./userSeedData');
const seedPost = require('./postSeedData');
const seedComment = require('./commentSeedData');
const seedAll = async () => {
  await sequelize.sync({ force: true }); 
  await seedUser();
  await seedPost();
  await seedComment();
  process.exit(0);
};
seedAll();

// What is process exit ()?
//     So when you call process.exit()
//  you actually emit the exit event that ends all 
//  tasks immediately even if there still are asynchronous 
//  operations not been done.process.exit() takes an exit code(Integer) 
//  as a parameter.The code 0 is the default and this means it exit with a 'success'.