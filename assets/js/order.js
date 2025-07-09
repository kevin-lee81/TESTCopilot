// 옵션 데이터 (필요에 따라 직접 수정/추가 가능)
const options = {
  productType: ["명함", "카드", "엽서"],
  material: ["PET 230g", "아트지 200g", "일반지 150g"],
  printType: ["양면 컬러", "단면 흑백"],
  size: ["86×54 mm", "90×58 mm", "100×70 mm"],
  quantity: [100, 200, 300, 500, 1000]
};

// 드롭다운 초기화
function populateSelect(id, items) {
  const sel = document.getElementById(id);
  items.forEach(val => {
    const opt = document.createElement("option");
    opt.value = val;
    opt.textContent = val;
    sel.appendChild(opt);
  });
}

window.onload = () => {
  populateSelect("productType", options.productType);
  populateSelect("material",     options.material);
  populateSelect("printType",    options.printType);
  populateSelect("size",         options.size);
  populateSelect("quantity",     options.quantity);
};

// 요약 업데이트
function updateSummary() {
  const form = document.getElementById("orderForm");
  const data = {
    제품: form.productType.value,
    소재: form.material.value,
    인쇄방식: form.printType.value,
    사이즈: form.size.value,
    수량: form.quantity.value,
    요청사항: form.notes.value || "없음"
  };

  let html = "<h2>주문 요약</h2><ul>";
  for (let key in data) {
    html += `<li><strong>${key}:</strong> ${data[key]}</li>`;
  }
  html += "</ul>";
  
  document.getElementById("summary").innerHTML = html;
}
