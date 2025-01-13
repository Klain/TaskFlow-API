//tests\app.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Auth API', () => {
  it('Debería registrar un nuevo usuario', async () => {
    const res = await request(app).post('/api/auth/register').send({
      username: 'testuser',
      password: 'password123',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('Debería autenticar un usuario', async () => {
    const res = await request(app).post('/api/auth/login').send({
      username: 'testuser',
      password: 'password123',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});

describe('Task API', () => {
  it('Debería devolver tareas paginadas', async () => {
    const res = await request(app)
      .get('/api/tasks?page=1&limit=5')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(5);
  });
});
