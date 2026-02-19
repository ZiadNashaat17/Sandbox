// ── Trip Data (from your actual report) ──────────────────────────────────────
const trips = [
  { id:'#1',  distance:8.1,  duration:11.28 },
  { id:'#2',  distance:15.4, duration:35.73 },
  { id:'#3',  distance:3.8,  duration:15.82 },
  { id:'#4',  distance:0.1,  duration:15.05 },
  { id:'#5',  distance:19.4, duration:31.15 },
  { id:'#6',  distance:12.1, duration:33.93 },
  { id:'#7',  distance:10.3, duration:27.75 },
  { id:'#8',  distance:15.0, duration:31.07 },
  { id:'#9',  distance:0.4,  duration:3.07  },
  { id:'#10', distance:8.1,  duration:13.20 },
  { id:'#11', distance:12.0, duration:29.60 },
  { id:'#12', distance:8.6,  duration:29.60 },
  { id:'#13', distance:10.8, duration:22.03 },
  { id:'#14', distance:16.4, duration:24.48 },
  { id:'#15', distance:4.8,  duration:21.07 },
  { id:'#16', distance:7.7,  duration:25.12 },
  { id:'#17', distance:0.0,  duration:3.72  },
  { id:'#18', distance:12.9, duration:25.88 },
  { id:'#19', distance:8.2,  duration:13.27 },
  { id:'#20', distance:1.6,  duration:4.97  },
  { id:'#21', distance:1.6,  duration:4.77  },
  { id:'#22', distance:11.4, duration:29.85 },
  { id:'#23', distance:0.1,  duration:1.02  },
  { id:'#24', distance:0.1,  duration:2.23  },
  { id:'#25', distance:33.9, duration:89.73 },
  { id:'#26', distance:30.9, duration:64.03 },
  { id:'#27', distance:15.5, duration:26.72 },
];

const labels    = trips.map(t => t.id);
const distances = trips.map(t => t.distance);
const durations = trips.map(t => parseFloat(t.duration.toFixed(1)));

// ── Shared defaults ───────────────────────────────────────────────────────────
const sharedScales = {
  x: {
    grid: { display: false },
    ticks: { color: '#999', font: { size: 11 } },
  },
  y: {
    grid: { color: '#f4f4f4' },
    border: { display: false },
    ticks: { color: '#999', font: { size: 11 } },
  },
};

const sharedTooltip = {
  backgroundColor: '#1a1a2e',
  padding: 10,
  cornerRadius: 8,
  titleFont: { size: 12, weight: 'bold' },
  bodyFont:  { size: 12 },
};

const sharedOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: sharedTooltip,
  },
  scales: sharedScales,
};

// ── Line Chart ────────────────────────────────────────────────────────────────
new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels,
    datasets: [{
      label: 'Distance (km)',
      data: distances,
      borderColor: '#4f7df3',
      backgroundColor: 'rgba(79,125,243,0.10)',
      borderWidth: 2.5,
      pointRadius: 4,
      pointBackgroundColor: distances.map(d => d >= 20 ? '#1a4fd6' : '#4f7df3'),
      pointBorderColor: 'white',
      pointBorderWidth: 1.5,
      fill: true,
      tension: 0.35,
    }],
  },
  options: {
    ...sharedOptions,
    plugins: {
      ...sharedOptions.plugins,
      tooltip: {
        ...sharedTooltip,
        callbacks: { label: ctx => ` ${ctx.parsed.y} km` },
      },
    },
    scales: {
      ...sharedScales,
      y: {
        ...sharedScales.y,
        title: { display: true, text: 'Distance (km)', color: '#aaa', font: { size: 11 } },
      },
    },
  },
});

// ── Distance Bar Chart ────────────────────────────────────────────────────────
new Chart(document.getElementById('distanceChart'), {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      label: 'Distance (km)',
      data: distances,
      backgroundColor: distances.map(d => d >= 20 ? '#1a4fd6cc' : '#4f7df3cc'),
      borderRadius: 5,
      borderSkipped: false,
    }],
  },
  options: {
    ...sharedOptions,
    plugins: {
      ...sharedOptions.plugins,
      tooltip: {
        ...sharedTooltip,
        callbacks: { label: ctx => ` ${ctx.parsed.y} km` },
      },
    },
    scales: {
      ...sharedScales,
      y: {
        ...sharedScales.y,
        title: { display: true, text: 'Distance (km)', color: '#aaa', font: { size: 11 } },
      },
    },
  },
});

// ── Duration Bar Chart ────────────────────────────────────────────────────────
new Chart(document.getElementById('durationChart'), {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      label: 'Duration (min)',
      data: durations,
      backgroundColor: durations.map(d => d >= 60 ? '#0ea57acc' : '#22c997cc'),
      borderRadius: 5,
      borderSkipped: false,
    }],
  },
  options: {
    ...sharedOptions,
    plugins: {
      ...sharedOptions.plugins,
      tooltip: {
        ...sharedTooltip,
        callbacks: {
          label: ctx => {
            const mins = ctx.parsed.y;
            const h = Math.floor(mins / 60);
            const m = Math.floor(mins % 60);
            return h > 0 ? ` ${h}h ${m}m` : ` ${m}m`;
          },
        },
      },
    },
    scales: {
      ...sharedScales,
      y: {
        ...sharedScales.y,
        title: { display: true, text: 'Duration (min)', color: '#aaa', font: { size: 11 } },
      },
    },
  },
});
