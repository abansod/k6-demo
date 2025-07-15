import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 50,
    duration: '30s',
};

export default function () {
    let res = http.get('https://www.google.com');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
} 