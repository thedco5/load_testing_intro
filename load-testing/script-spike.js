import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 2000 },
        { duration: '1m', target: 0 }
    ],
};

/* SPIKE TEST */

export default function () {
    const urlRes = http.get('http://localhost:8080');
    sleep(1);
}
