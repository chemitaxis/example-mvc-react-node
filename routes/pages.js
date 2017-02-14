import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.render('home', { title: 'Index' });
});

router.get('/app', (req, res, next) => {
  res.render('app', { title: 'App' });
});

router.get('/example', (req, res, next) => {
  res.render('example', { title: 'Example' });
});

export default router;
