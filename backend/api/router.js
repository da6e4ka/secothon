const Router = require('koa-router');
const user = require('./controller/user');
const project = require('./controller/project');
const mentor = require('./controller/mentor');
const checkUser = require('./middelware/checkUser');

const router = new Router;

router.use(checkUser.currentUser);

router.post('/mentor', mentor.post);
router.get('/mentor', mentor.get);

router.get('/users/:id', user.getOne);
router.get('/users', user.get);
router.get('/exit', user.exit);
router.get('/delete', user.deleteUser);
//router.post('/users', user.post); // не доступен из API
router.put('/users/:id', user.put);

router.get('/set_vk_avatar', user.setVKAvatar);

router.get('/projects/:id', project.getOne);
router.get('/projects', project.get);
router.post('/projects', project.post);
router.put('/projects/:id', project.put);

module.exports = router;