document.getElementById('costBenefitForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const initialCost = parseFloat(document.getElementById('initialCost').value);
    const annualBenefit = parseFloat(document.getElementById('annualBenefit').value);
    const projectDuration = parseInt(document.getElementById('projectDuration').value);

    const npv = calculateNPV(initialCost, annualBenefit, projectDuration);
    const roi = calculateROI(initialCost, annualBenefit, projectDuration);

    document.getElementById('npvResult').textContent = `Net Present Value (NPV): $${npv.toFixed(2)}`;
    document.getElementById('roiResult').textContent = `Return on Investment (ROI): ${roi.toFixed(2)}%`;

    document.getElementById('result').style.display = 'block';
});

function calculateNPV(initialCost, annualBenefit, projectDuration) {
    const discountRate = 0.1; // Example discount rate (10%)
    let npv = -initialCost;

    for (let year = 1; year <= projectDuration; year++) {
        npv += annualBenefit / Math.pow(1 + discountRate, year);
    }

    return npv;
}

function calculateROI(initialCost, annualBenefit, projectDuration) {
    const totalBenefit = annualBenefit * projectDuration;
    const totalCost = initialCost;
    const roi = ((totalBenefit - totalCost) / totalCost) * 100;

    return roi;
}