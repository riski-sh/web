const tabNews       = document.getElementById('select-news');
const tabCharts     = document.getElementById('select-charts');
const tabHistorical = document.getElementById('select-historical');
const tabResearch   = document.getElementById('select-research');

tabNews.onclick = () =>
{
  tabNews.style.fontStyle = 'normal';
  tabCharts.style.fontStyle = 'italic';
  tabHistorical.style.fontStyle = 'italic';
  tabResearch.style.fontStyle = 'italic';
}

tabCharts.onclick = () =>
{
  tabNews.style.fontStyle = 'italic';
  tabCharts.style.fontStyle = 'normal';
  tabHistorical.style.fontStyle = 'italic';
  tabResearch.style.fontStyle = 'italic';
}

tabHistorical.onclick = () =>
{
  tabNews.style.fontStyle = 'italic';
  tabCharts.style.fontStyle = 'italic';
  tabHistorical.style.fontStyle = 'normal';
  tabResearch.style.fontStyle = 'italic';
}

tabResearch.onclick = () =>
{
  tabNews.style.fontStyle = 'italic';
  tabCharts.style.fontStyle = 'italic';
  tabHistorical.style.fontStyle = 'italic';
  tabResearch.style.fontStyle = 'normal';
}
