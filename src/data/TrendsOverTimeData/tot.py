from platform import processor
import pandas as pd

data = pd.read_csv("./data with categories.csv")

# trendsovertimepayments = (
#     data.groupby(["DATE", "WEEKDAY", "WEEK"])
#     .sum()
#     .reset_index()
#     .sort_values(by=["DATE"])
#     .rename(columns={" TRUE_AMOUNT_GBP ": "size"})
# )

# dayofweekgroupingpayments = (
#     data.groupby(["DATE", "WEEKDAY"])[" TRUE_AMOUNT_GBP "]
#     .sum()
#     .reset_index()
#     .sort_values(by=["WEEKDAY"])
# )

# dayofweekgroupingpayments = (
#     dayofweekgroupingpayments.groupby(["WEEKDAY"])
#     .mean()
#     .reset_index()
#     .sort_values(by=["WEEKDAY"])
#     .rename(columns={" TRUE_AMOUNT_GBP ": "size"})
# )

# dayofweekgroupingpayments.to_csv("dayofweekgroupingpayments.csv")

# processors = (data.groupby(["DATE", "PROCESSOR"])[" TRUE_AMOUNT_GBP "].sum())
# print(processors.unstack())

# processors = (
#     processors.unstack().reset_index().rename_axis(None, axis=1)
# )

# processors["DATE"] = processors["DATE"].str.replace("/2021", "")

# processors.to_csv("processorsstackedbarchart.csv")

# bestspend = (
#     data.groupby(["COUNTRY"])[" TRUE_AMOUNT_GBP "]
#     .sum()
#     .sort_values(ascending=False)
#     .head(10)
#     .reset_index()
# )

# bestspendarray = bestspend["COUNTRY"].to_numpy()

# data = data[data["COUNTRY"].isin(bestspendarray)]


# country = data.groupby(["DATE", "COUNTRY"])[" TRUE_AMOUNT_GBP "].sum()

# country = country.unstack().reset_index().reset_index().rename_axis(None, axis=1)

# country["DATE"] = country["DATE"].str.replace("/2021", "")

# print(country)

# country.to_csv("countrystackedbarchart.csv")



 

europe = ["Americas"]
processora = ["CHECKOUT"]

data = data[data["REGION"].isin(europe)]
data = data[data["PROCESSOR"].isin(processora)]

country = data.groupby(["DATE", "PROCESSOR"])[" TRUE_AMOUNT_GBP "].sum()

country = country.unstack().reset_index().reset_index().rename_axis(None, axis=1)

country["DATE"] = country["DATE"].str.replace("/2021", "")

print(country)

country.to_csv("Americastackedbarchart.csv")


# trendsovertimepayments["DATE"] = trendsovertimepayments["DATE"].str.replace("/2021", "")
# trendsovertimepayments["WEEK"] = trendsovertimepayments[trendsovertimepayments.WEEK != 36]


# trendsovertimepayments.to_csv("trendsovertimedatepayments.csv")
# trendsovertimetransactions = data.groupby(["DATE", "WEEK", "COUNTRY"]).size().reset_index().rename(columns={0: "size"})
# trendsovertimetransactions = trendsovertimetransactions.sort_values(by=["size"],ascending=False)


# trendsovertimeweek = (
#     data.groupby(["WEEK"])[" TRUE_AMOUNT_GBP "]
#     .sum()
#     .reset_index()
#     .sort_values(by=["WEEK"])
# )
# trendsovertimeweek = trendsovertimeweek[trendsovertimeweek.WEEK != 36]
# trendsovertimeweek.to_csv("trendsovertimeweek.csv")

# uniquedaysinweek = data.groupby(["WEEK"])["DATE"].unique()

# print(uniquedaysinweek)


# trendsovertimetransactions.to_csv("trendsovertimetransactions.csv")

# cd src/data/TrendsOverTimeData
# python tot.py
