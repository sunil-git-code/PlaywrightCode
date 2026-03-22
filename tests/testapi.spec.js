import { test, expect } from '@playwright/test';

test('should be able to get booking details', async ({ request }) => {

  const response = await request.get(
    'https://restful-booker.herokuapp.com/booking/1'
  );

  console.log("Status:", response.status());

  const body = await response.json();
  console.log(body);

  expect(response.status()).toBe(200);
  expect(body).toHaveProperty('firstname');
});