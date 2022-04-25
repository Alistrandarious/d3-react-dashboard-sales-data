import pandas as pd

data = pd.read_csv("./data with categories.csv")

# regionandcountry = data.groupby(["COUNTRY", "REGION"], as_index=False).size().sort_values(by=['size'],ascending=False).head(10)
# regionandcountry = regionandcountry.reset_index(drop=True)

# chloroplethdata = data.groupby(["ISO_A3"], as_index=False).size()
# chloroplethdata.to_csv("Choroplethdata.csv")

# region = data.groupby(["REGION"], as_index=False).size().sort_values(by=['size'],ascending=False)
# region = region.reset_index(drop=True)

spendperCountry = data.groupby(["COUNTRY", "REGION"])[" TRUE_AMOUNT_GBP "].sum().reset_index().sort_values(by=[" TRUE_AMOUNT_GBP "],ascending=False).head(15)
spendperCountry.to_csv("spendpercountry.csv")

spendperRegion = data.groupby(["REGION"])[" TRUE_AMOUNT_GBP "].sum().reset_index().sort_values(by=[" TRUE_AMOUNT_GBP "],ascending=False)
spendperRegion.to_csv("spendperregion.csv")


# regionandcountry.to_csv("regionandcountrydata.csv", index=False)
# region.to_csv("regiondata.csv", index=False)
#chloroplethdata.to_csv("choroplethdata.csv")

#cd src/data/CountriesAndRegionsData
# python regiondata.py
