const { fetchPage } = require('./src/playwright.service');

async function test() {
  try {
    console.log('🚀 Fetching https://example.com...');
    const result = await fetchPage('https://example.com');
    console.log('✅ Success!');
    console.log('Snapshot ID:', result.id);
    console.log('First 200 chars:\n', result.html.substring(0, 200));
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

test();