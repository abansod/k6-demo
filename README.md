# k6 Demo Project

## Structure

- `scripts/` - k6 test scripts
- `results/` - Test results output
- `lib/` - Reusable JS libraries for k6 scripts

## Running the Test

Make sure you have [k6](https://k6.io/docs/getting-started/installation/) installed.

A sample test script (`scripts/sample_test.js`) is provided, which:
- Tests the public URL https://test.k6.io
- Uses 50 virtual users for 30 seconds
- Checks that the response status is 200

Instructions for running the test are included in `README.md`.  
You can run the test with:

```sh
k6 run scripts/sample_test.js
```

You can adjust the number of virtual users and duration in the script's `options`. 