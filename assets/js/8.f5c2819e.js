(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{320:function(e,s,a){e.exports=a.p+"assets/img/assmt_area_growth_opt.4141dc74.svg"},321:function(e,s,a){e.exports=a.p+"assets/img/new_area_price_hist.53b8947d.svg"},322:function(e,s,a){e.exports=a.p+"assets/img/simulated_map_performance.ff0c1350.svg"},362:function(e,s,a){e.exports=a.p+"assets/img/og_boundries.d9a85b20.svg"},363:function(e,s,a){e.exports=a.p+"assets/img/assmt_area_price_opt.167f3ad5.svg"},417:function(e,s,a){"use strict";a.r(s);var t=a(43),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"assessment-area-alternatives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assessment-area-alternatives"}},[e._v("#")]),e._v(" Assessment Area Alternatives")]),e._v(" "),t("h2",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background:")]),e._v(" "),t("p",[t("strong",[e._v("Assessment Areas")]),e._v(" are geographic portions of cities that are meant to group similar homes together. When individual homes are assessed by the city, they are compared against similar homes throughout a city, but mostly against those in the same assessment area. One would expect a home on a city's outskirts to be compared to other more rural homes, not one nestled in the city center. Assessment areas are important because they help determine how much property tax each home has to pay, a significant expense for homeowners, and because those property taxes are the largest source of revenue for cites.")]),e._v(" "),t("p",[e._v("In this project, we have evaluated the quality of assessment areas 3 ways.")]),e._v(" "),t("ul",[t("li",[e._v("Standard Deviation of sales prices of homes within assessment areas.\n"),t("ul",[t("li",[e._v('Motivation: in "good" assessment areas, homes are priced similarly. Assessment areas with a low standard deviation of sales prices will be priced similarly.')])])]),e._v(" "),t("li",[e._v("Standard Deviation of growth rate of sales prices of homes within assessment areas.\n"),t("ul",[t("li",[e._v('Motivation: in "good" assessment areas, homes are affected by market prices in a similar way, and the values of homes should be growing / shrinking at a similar rate.')])])]),e._v(" "),t("li",[e._v("Assessment Value Accuracy: The percentage of the most recent sales price that the assessed value for a home is above or below the sales price, which can be expressed as "),t("code",[e._v("100 * (AssmtPrice-SalesPrice)/SalesPrice")]),e._v(". The average or median of this value for each home in an assessment area is then taken.\n"),t("ul",[t("li",[e._v("For example, if a home recently sold for $100K, and it was assessed for $200K, it's assessment value accuracy score would be 100%, because it is assessed at double it's most recent sales price.")]),e._v(" "),t("li",[e._v('Motivation: "Fair" assessment prices for homes should be roughly equal to the sales price of the home, so "fair" assessment areas will have assessment value accuracy scores around zero, or at least all be at the same level of over / under evaluation.')])])])]),e._v(" "),t("p",[t("strong",[e._v("A note on fairness:")]),e._v(" The over/under assessment of a home has different implications for the homeowner and the city. For example, consider when a home was under-assessed (a negative assessment value accuracy score):")]),e._v(" "),t("ul",[t("li",[e._v("This is "),t("em",[e._v("good for the homeowner")]),e._v(" because they will be paying less taxes than they would if their home was assessed at the last sales price.")]),e._v(" "),t("li",[e._v("But, this is "),t("em",[e._v("bad for the city")]),e._v(", because the city will be getting less tax revenue.")])]),e._v(" "),t("p",[e._v('Generally, we consider any score closer to 0 "better", in a way looking at the absolute value of homes, so a home under / overvalued by 10% is equally "accurate". But when we discuss the fairness of assessment values, we are especially sensitive to some sections of the city having a higher/lower scores than others. For example, if we found that predominantly black assessment areas had a higher accuracy score than white neighborhoods, this would hint at a racial unfairness, as black households would be paying more in taxes relative to the sales price of their homes.')]),e._v(" "),t("h2",{attrs:{id:"alternative-area-maps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alternative-area-maps"}},[e._v("#")]),e._v(" Alternative Area Maps:")]),e._v(" "),t("p",[e._v("In this context, we only examine single-family assessment areas. There are other areas for multi family / apartment buildings, as well as commercial properties.")]),e._v(" "),t("p",[e._v("This section examines three potential single families assessment area maps.")]),e._v(" "),t("ul",[t("li",[e._v("The current assessment area map created by the city of Madison.")]),e._v(" "),t("li",[e._v("A map created to made the standard deviation of sales prices similar between areas.")]),e._v(" "),t("li",[e._v("A map created to make the standard deviation of growth rate of sales prices similar between areas.")])]),e._v(" "),t("p",[e._v("The last two maps were created by repeatedly splitting a large assessment area (starting with the whole city as 1 assessment area), into two assessment areas, so that the standard deviation of sales price growth rates was a close as possible between the two new, smaller assessment areas. This splitting process is then repeated for each of these two new areas.")]),e._v(" "),t("p",[e._v('To ensure, "normal" looking assessment areas, we imposed a few extra criteria on each split:')]),e._v(" "),t("ul",[t("li",[e._v("Both assessment areas have to have at least 25 homes in them.")]),e._v(" "),t("li",[e._v("Both assessment areas have to exceed a minimum size.")]),e._v(" "),t("li",[e._v("Both assessment areas can't be too wide / narrow, defined by the ratio of their widths and heights.")]),e._v(" "),t("li",[e._v("The number of homes in the two assessment areas can't be different by more than a factor of 2.")])]),e._v(" "),t("img",{staticStyle:{zoom:"100%"},attrs:{src:a(362),alt:"image-20200524142738004"}}),e._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:a(363),alt:"image-20200524142738004"}}),e._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:a(320),alt:"image-20200524142738004"}}),e._v(" "),t("p",[e._v("The plots below show the distribution of standard deviations of sales price growth rates in both the new and the old assessment areas.")]),e._v(" "),t("img",{staticStyle:{zoom:"150%"},attrs:{src:a(321),alt:"image-20200524142738004"}}),e._v(" "),t("p",[e._v("Even though the new assessment areas were optimized to have near-equal standard deviations of sales prices, the new assessments actually performed worse than the old ones. This might be because they only have straight, right-angle boundaries. It could also be that most of the variation of sales price growth is very localized, and sufficiently large assessment areas will have a hard time separating out the localized variation.")]),e._v(" "),t("h2",{attrs:{id:"alternative-area-maps-price-simulation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alternative-area-maps-price-simulation"}},[e._v("#")]),e._v(" Alternative Area Maps Price Simulation")]),e._v(" "),t("p",[e._v('Finally, we looked to see the impact that these two maps would have on assessment prices, and if the assessment prices simulated under these new maps are more accurate than for existing maps. In order to do this, we created three "simulated" assessment prices '),t("strong",[e._v("for each house,")]),e._v(" using three regression models, each corresponding to a different assessment area map. Each regression model was trained, using every home in Madison, to predict the total assessment value of a home. The three regression models all used the following variables about homes as inputs:")]),e._v(" "),t("ul",[t("li",[e._v("The home's time-adjusted sales price")]),e._v(" "),t("li",[e._v("The home's square footage")]),e._v(" "),t("li",[e._v("The year the house was built")]),e._v(" "),t("li",[e._v("The median sales price of home's in that home's assessment area.\n"),t("ul",[t("li",[e._v("This was different between the three assessment area maps.")])])])]),e._v(" "),t("p",[e._v("This process yielded three simulated assessment prices for each house. I then looked at the degree of under/over-evaluation, defined by "),t("code",[e._v("100*(AssmtPrice-SalesPrice)/SalesPrice")]),e._v(" for each of the simulated assessment prices for each house.")]),e._v(" "),t("img",{staticStyle:{zoom:"150%"},attrs:{src:a(322)}}),e._v(" "),t("p",[e._v("Pictured above is a bar plot depicting the average under-evaluation under the three different maps / three simulated assessment values. The different in evaluation is relatively small, but the price-optimized and growth-optimized maps result in more accurate simulated assessment prices.")])])}),[],!1,null,null,null);s.default=r.exports}}]);