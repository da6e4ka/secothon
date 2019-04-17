const Router = require('koa-router');
const apiRouter = require('./api/router');
const adminRouter = require('./adminRouter');
const userController = require('./api/controller/user');
const authMd = require('./api/middelware/auth');
const checkUser = require('./api/middelware/checkUser');
const config = require('./config');

const regController = require('./controller/registration');
const loginController = require('./controller/login');
const pagesController = require('./controller/page');
const counter = require('./controller/counter');
const recController = require('./controller/recovery');

const passwordPage = require('./controller/updaterecovery');
const tokenPage = require('./controller/token');
const timepadCallback = require('./controller/timepad');
const yandexTableFeed = require('./controller/yandexTableFeed');
//const userDelete = require('./controller/userDelete');

const router = new Router;

router.use(authMd);

router.get('/counter/', counter);

router.use('/api', apiRouter.routes(), apiRouter.allowedMethods());
router.use('/admin', adminRouter.routes(), adminRouter.allowedMethods());

router.post('/registration', regController.post, userController.post);
router.get('/registration', regController.get);

router.get('/recovery', recController.get);
router.post('/recovery', recController.post);

router.get('/recovery/:token', tokenPage.logUser);

router.get('/profile/password', checkUser.currentUser, passwordPage.get);
router.post('/profile/password', checkUser.currentUser, passwordPage.post);

router.post('/login', loginController.post);
router.get('/login', loginController.get);

router.get('/nomination', pagesController.nomination);

router.get('/archive', pagesController.archive);
router.get('/project/create', checkUser.userWithoutProject, pagesController.create_project_page);
router.post('/project/create', checkUser.userWithoutProject, pagesController.create_project);

router.get('/project/update', checkUser.userWithProject, pagesController.updateProjectGet);
router.post('/project/update', checkUser.userWithProject, pagesController.updateProject);

router.get('/project/delete', checkUser.userWithProject, pagesController.deleteProject);

router.get('/partners', pagesController.partners);
router.get('/projects', pagesController.projects);
router.get('/about', pagesController.about);
router.get('/', pagesController.main);
router.get('/mentors', pagesController.mentors);
router.get('/users', pagesController.users, userController.get);
router.get('/profile', checkUser.currentUser, pagesController.profile);
router.get('/profile/:token', checkUser.currentUser, pagesController.profileWithToken);
router.post('/profile', checkUser.currentUser, pagesController.putProfile);
router.get('/resend-email', checkUser.currentUser, pagesController.resendEmail);


router.post('/timepad_callback/' + config.timepad_secret, timepadCallback);

router.get('/vk', userController.vk);

router.get('/join', checkUser.userWithoutProject, userController.joinProject);
router.get('/leave', checkUser.userWithProject, userController.leaveProject);

router.get('/table/feed.json', yandexTableFeed);

module.exports = router;