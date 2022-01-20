/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 100,
  duration: '15s',
};

const randomID = Math.floor(Math.random() * 100000);

// http://localhost:3000/products
// http://localhost:3000/products/${randomID}
// http://localhost:3000/products/${randomID}/styles
// http://localhost:3000/products/${randomID}/related

const urlStyles = `http://localhost:3000/products/${randomID}`;

export default function () {
  const res = http.get(urlStyles);
  sleep(1);
  check(res, {
    'is status 200': (r) => r.status === 200,
    'Return time < 2ms': (r) => r.timings.duration < 2,
    'Return time < 4ms': (r) => r.timings.duration < 4,
    'Return time < 10ms': (r) => r.timings.duration < 10,
    'Return time < 25ms': (r) => r.timings.duration < 25,
    'Return time < 50ms': (r) => r.timings.duration < 50,
    'Return time < 100ms': (r) => r.timings.duration < 100,
    'Return time < 200ms': (r) => r.timings.duration < 200,
    'Return time < 500ms': (r) => r.timings.duration < 500,
  });
}
