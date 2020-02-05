---
template: post
title: Estadistica - Tarea 3
slug: Muestreo
draft: false
date: 2020-02-03T20:29:37.121Z
description: 'Esta es la tarea #3'
category: Estadistica
tags:
  - Handwriting
  - Learning to write
---
```python
import numpy as np
import scipy.stats as st
import statsmodels.datasets
import matplotlib.pyplot as plt
import pandas as pd
from math import log,sqrt
%matplotlib inline

lamda1 = 4
randomlist = []
for x in range(0,40):
    i = np.random.uniform()
    randomlist.append({i,(log(1-i))/-lamda1})
        
random_df = pd.DataFrame(randomlist, columns=['ri','xi']) 
random_df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ri</th>
      <th>xi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0.077369</td>
      <td>0.020131</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0.400035</td>
      <td>0.127721</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0.394302</td>
      <td>0.125343</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0.979911</td>
      <td>0.976891</td>
    </tr>
    <tr>
      <td>4</td>
      <td>0.401402</td>
      <td>0.128291</td>
    </tr>
    <tr>
      <td>5</td>
      <td>0.042507</td>
      <td>0.010859</td>
    </tr>
    <tr>
      <td>6</td>
      <td>0.240309</td>
      <td>0.068711</td>
    </tr>
    <tr>
      <td>7</td>
      <td>0.223109</td>
      <td>0.063114</td>
    </tr>
    <tr>
      <td>8</td>
      <td>0.036212</td>
      <td>0.009221</td>
    </tr>
    <tr>
      <td>9</td>
      <td>0.545641</td>
      <td>0.197217</td>
    </tr>
    <tr>
      <td>10</td>
      <td>0.259003</td>
      <td>0.074940</td>
    </tr>
    <tr>
      <td>11</td>
      <td>0.096397</td>
      <td>0.025341</td>
    </tr>
    <tr>
      <td>12</td>
      <td>0.050970</td>
      <td>0.013079</td>
    </tr>
    <tr>
      <td>13</td>
      <td>0.309747</td>
      <td>0.092674</td>
    </tr>
    <tr>
      <td>14</td>
      <td>0.290643</td>
      <td>0.085849</td>
    </tr>
    <tr>
      <td>15</td>
      <td>0.646604</td>
      <td>0.260041</td>
    </tr>
    <tr>
      <td>16</td>
      <td>0.645787</td>
      <td>0.259464</td>
    </tr>
    <tr>
      <td>17</td>
      <td>0.424885</td>
      <td>0.138296</td>
    </tr>
    <tr>
      <td>18</td>
      <td>0.791549</td>
      <td>0.392012</td>
    </tr>
    <tr>
      <td>19</td>
      <td>0.366248</td>
      <td>0.114025</td>
    </tr>
    <tr>
      <td>20</td>
      <td>0.944259</td>
      <td>0.721759</td>
    </tr>
    <tr>
      <td>21</td>
      <td>0.534874</td>
      <td>0.191362</td>
    </tr>
    <tr>
      <td>22</td>
      <td>0.873547</td>
      <td>0.516971</td>
    </tr>
    <tr>
      <td>23</td>
      <td>0.650333</td>
      <td>0.262693</td>
    </tr>
    <tr>
      <td>24</td>
      <td>0.350351</td>
      <td>0.107831</td>
    </tr>
    <tr>
      <td>25</td>
      <td>0.319391</td>
      <td>0.096192</td>
    </tr>
    <tr>
      <td>26</td>
      <td>0.768246</td>
      <td>0.365520</td>
    </tr>
    <tr>
      <td>27</td>
      <td>0.872284</td>
      <td>0.514486</td>
    </tr>
    <tr>
      <td>28</td>
      <td>0.039264</td>
      <td>0.010014</td>
    </tr>
    <tr>
      <td>29</td>
      <td>0.814116</td>
      <td>0.420658</td>
    </tr>
    <tr>
      <td>30</td>
      <td>0.316775</td>
      <td>0.095233</td>
    </tr>
    <tr>
      <td>31</td>
      <td>0.944670</td>
      <td>0.723609</td>
    </tr>
    <tr>
      <td>32</td>
      <td>0.745966</td>
      <td>0.342572</td>
    </tr>
    <tr>
      <td>33</td>
      <td>0.019765</td>
      <td>0.004991</td>
    </tr>
    <tr>
      <td>34</td>
      <td>0.489044</td>
      <td>0.167868</td>
    </tr>
    <tr>
      <td>35</td>
      <td>0.179289</td>
      <td>0.049396</td>
    </tr>
    <tr>
      <td>36</td>
      <td>0.328243</td>
      <td>0.099465</td>
    </tr>
    <tr>
      <td>37</td>
      <td>0.612752</td>
      <td>0.237172</td>
    </tr>
    <tr>
      <td>38</td>
      <td>0.766562</td>
      <td>0.363709</td>
    </tr>
    <tr>
      <td>39</td>
      <td>0.319405</td>
      <td>0.096197</td>
    </tr>
  </tbody>
</table>
</div>




```python
# random_df = random_df.sort_values(by=['xi'])
# random_df.tail()
```


```python
limits_list = []
n = len(random_df.index)
k = round(sqrt(n))
nhigh =  random_df['xi'].max()
nlow =  random_df['xi'].min()
range1 = nhigh - nlow
w = range1 / k

#limites inferiores y superiores
xlimite = nlow
for x in range(0,k):
    if x == 0:
        linf = nlow
        lsup = nlow + w
    else:
        linf = xlimite
        lsup = xlimite + w
    
    xlimite = xlimite + w
    limits_list.append([linf,lsup])
    
limits_list = np.around(limits_list, decimals=4)
limits_df = pd.DataFrame(limits_list, columns=['linf','lsup']) 
```


```python
frecuencies_list = []
ii = 0
for index1, irow in limits_df.iterrows():
    i = 0
    for index2, jrow in random_df.iterrows():
        if index1 == 0:
            if jrow['xi'] >= irow['linf'] and jrow['xi'] <= irow['lsup'] :
                i = i+1
        else:
            if jrow['xi'] > irow['linf'] and jrow['xi'] <= irow['lsup'] :
                i = i+1      
    #print(irow['linf'], irow['lsup'],jrow['xi'])
    ii = ii+i
    frecuencies_list.append([irow['linf'], irow['lsup'],i,ii/n,(i/n)*100,ii,(ii/n)*100])

frecuencies_df = pd.DataFrame(frecuencies_list, columns=['linf','lsup','fabsoluta','frelativa','fporcentual','Facumulada','Facmporcentual'])
frecuencies_df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>linf</th>
      <th>lsup</th>
      <th>fabsoluta</th>
      <th>frelativa</th>
      <th>fporcentual</th>
      <th>Facumulada</th>
      <th>Facmporcentual</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>0.0050</td>
      <td>0.1670</td>
      <td>22</td>
      <td>0.550</td>
      <td>55.0</td>
      <td>22</td>
      <td>55.0</td>
    </tr>
    <tr>
      <td>1</td>
      <td>0.1670</td>
      <td>0.3290</td>
      <td>7</td>
      <td>0.725</td>
      <td>17.5</td>
      <td>29</td>
      <td>72.5</td>
    </tr>
    <tr>
      <td>2</td>
      <td>0.3290</td>
      <td>0.4909</td>
      <td>5</td>
      <td>0.850</td>
      <td>12.5</td>
      <td>34</td>
      <td>85.0</td>
    </tr>
    <tr>
      <td>3</td>
      <td>0.4909</td>
      <td>0.6529</td>
      <td>2</td>
      <td>0.900</td>
      <td>5.0</td>
      <td>36</td>
      <td>90.0</td>
    </tr>
    <tr>
      <td>4</td>
      <td>0.6529</td>
      <td>0.8149</td>
      <td>2</td>
      <td>0.950</td>
      <td>5.0</td>
      <td>38</td>
      <td>95.0</td>
    </tr>
    <tr>
      <td>5</td>
      <td>0.8149</td>
      <td>0.9769</td>
      <td>1</td>
      <td>0.975</td>
      <td>2.5</td>
      <td>39</td>
      <td>97.5</td>
    </tr>
  </tbody>
</table>
</div>




```python
fig, (ax1) = plt.subplots(1,1, figsize=(10, 4))
data = random_df['xi']
ax1.plot(sorted(data)[::-1], 'o')
ax1.set_xlabel('muestra xi')
ax1.set_ylabel('valor')
```




    Text(0, 0.5, 'valor')




![png](output_4_1.png)

