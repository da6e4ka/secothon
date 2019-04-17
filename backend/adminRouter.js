require('marko/node-require');
const Router = require('koa-router');
const admin = require('./controller/admin');
const checkUser = require('./api/middelware/checkUser');
const userTabelsDownload = require('./api/middelware/userTabelsDownload');

const router = new Router;

router.use(checkUser.adminUser);

router.get('/', admin.get);

for(let edit in admin.edit) {
    router.get('/edit/' + edit, admin.edit[edit].get);
    router.post('/edit/' + edit, admin.edit[edit].post);
}

router.post('/partner/save', admin.partner.save);
router.get('/partner/delete', admin.partner.delete);
router.put('/partner/order', admin.partner.order);
router.post('/partner/types', admin.partner.types);

router.get('/new/partner', admin.new.partner.get);
router.post('/new/partner', admin.new.partner.post);

router.get('/new/nomination', admin.new.nomination.get);
router.post('/new/nomination', admin.new.nomination.post);

router.post('/nomination/save', admin.nomination.save);
router.get('/nomination/delete', admin.nomination.delete);

router.post('/new/mentor', admin.new.mentor.post);
router.get('/new/mentor', admin.new.mentor.get);
router.post('/support', admin.support.post);
router.get('/support', admin.support.get);
router.post('/support/save', admin.support.save);
router.get('/support/delete', admin.support.delete);
router.put('/support/order', admin.support.order);

router.get('/project/delete', admin.project.delete);
router.get('/project/', admin.edit.project.get);
router.post('/project/', admin.edit.project.post);


router.get('/mentor/delete', admin.mentor.delete);
router.put('/mentor/order', admin.mentor.order);

router.post('/users/save', admin.user.save);
router.get('/users/delete', admin.user.delete);

router.post('/timer', admin.timer);
router.post('/meta', admin.meta);

router.get('/users/csv', userTabelsDownload.csv);
router.get('/users/excel', userTabelsDownload.excel);

module.exports = router;