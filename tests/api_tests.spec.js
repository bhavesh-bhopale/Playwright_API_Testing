import {tests, expect} from '@playwright/test';
import { log } from 'node:console';

test('API DELETE REQUEST', async ({ request }) => {
  const response = await request.delete('https://request.in/api/users/2');
  expect(response.status()).toBe(204);
});


test('API POST REQUEST', async({request}) => {
    const response  = await request.post('https://request.in/api/users/',{
        data:{
            "name": "morpheus",
            "job": "leader"
            
        }
    })

     expect(response.status()).toBe(201)

    const text = await response.text();
    expect(text).toContain('Bhavesh')
    console.log(await response.json());


})

test('API GET REQUEST', async({request}) => {
    const response  = await request.get('https://request.in/api/users/2')

    expect(response.status()).toBe(200)

    const text = await response.text();
    expect(text).toContain('janet')
    console.log(await response.json());

})