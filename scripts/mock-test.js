// scripts/mock-test.js
// 模擬自動化測試。當 FORCE_FAIL=1 時會「故意失敗」方便截圖。
const phase = process.argv[2] || "all";
const shouldFail = process.env.FORCE_FAIL === "1";

console.log(`Running mock tests (${phase})...`);
if (shouldFail) {
  console.error("Mock test FAILED on purpose.");
  process.exit(1);
}

// 模擬測試輸出
setTimeout(() => {
  console.log("✓ example should do something");
  console.log("✓ another example works");
  process.exit(0);
}, 200);
