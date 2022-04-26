import pandas as pd
from pkg_resources import get_build_platform;

data = pd.read_csv("./data with categories.csv")

# GBP
data1 = data
data1 = data1.groupby(["DATE", "COUNTRY", "CATEGORY", "WEEK", "PROCESSOR"])[" TRUE_AMOUNT_GBP "].sum().reset_index().sort_values("DATE")
data1["DATE"] = data1["DATE"].str.replace("/2021", "")
data1.to_csv("brushingviewrt.csv")

# Otherwise
data2 = data





#cd src/data/ResponseTimeData
# python rt.py