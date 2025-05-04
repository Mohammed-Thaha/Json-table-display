import chalk from 'chalk';
import Table from 'cli-table3';

export default function printTable(data) {
  if (!Array.isArray(data)) {
    console.log(chalk.red("❌ Input must be an array of objects."));
    return;
  }

  if (data.length === 0) {
    console.log(chalk.yellow("⚠️  Empty data array."));
    return;
  }

  const allKeys = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));
  const colors = ['#00bfff', '#00ff00', '#ff69b4', '#ffa500', '#8a2be2'];

  const table = new Table({
    head: allKeys.map((key, i) =>
      chalk.hex(colors[i % colors.length])(key.toUpperCase())
    )
  });

  data.forEach(obj => {
    table.push(allKeys.map(key => {
      const val = obj[key] !== undefined ? obj[key] : '';
      return chalk.white(val.toString());
    }));
  });

  console.table(table.toString());
}
