import pandas as pd
from pkg_resources import get_build_platform;

data = pd.read_csv("./data with categories.csv")

#Summary
summary = data.shape[0]
print(summary)




#cd src/data/ResponseTimeData
# python rt.py