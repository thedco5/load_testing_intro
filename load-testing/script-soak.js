import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5m', target: 100 },
    { duration: '8h', target: 100 }, 
    { duration: '5m', target: 0 }
  ],
};

/* SOAK TEST */

export default function () {
  const res = http.get('http://localhost:8080');
  sleep(1);
  http.post('http://localhost:8080/login', JSON.stringify({ username: 'username', password: 'password' }));
  sleep(1);
  http.post('http://localhost:8080/capitalize', JSON.stringify({ name: 'eman', email: 'liame' }));
  sleep(1);
}