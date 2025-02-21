const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

interface ExcelRow {
  'Shop Name'?: string;
  'Name'?: string;
  'Address'?: string;
  'Latitude'?: string | number;
  'Longitude'?: string | number;
  'Category'?: string;
}

interface Reseller {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  category: string;
}

try {
  // Read the Excel file
  const workbook = XLSX.readFile(path.join(__dirname, '../src/lib/re-seller-location (1).xlsx'));
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Convert to JSON
  const data = XLSX.utils.sheet_to_json(worksheet) as ExcelRow[];

  // Format the data
  const resellers: Reseller[] = data
    .map((row: ExcelRow): Reseller => ({
      name: row['Shop Name'] || row['Name'] || '',
      address: row['Address'] || '',
      latitude: typeof row['Latitude'] === 'string' ? parseFloat(row['Latitude']) : (row['Latitude'] || 0),
      longitude: typeof row['Longitude'] === 'string' ? parseFloat(row['Longitude']) : (row['Longitude'] || 0),
      category: row['Category'] || 'Retail & Convenience'
    }))
    .filter((r: Reseller): boolean => 
      r.name !== '' && 
      typeof r.latitude === 'number' && !isNaN(r.latitude) && 
      typeof r.longitude === 'number' && !isNaN(r.longitude)
    );

  // Write to JSON file
  fs.writeFileSync(
    path.join(__dirname, '../public/resellers.json'),
    JSON.stringify(resellers, null, 2)
  );

  console.log('Successfully converted Excel to JSON');
  console.log(`Converted ${resellers.length} locations`);
} catch (error) {
  console.error('Error converting Excel file:', error);
} 