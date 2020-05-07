# Flight_project

In this project, I used dataset from Bureau of Transportation Statistics to analyze performance of different US Domestic Air Carrier in the period of 2003-2015. 

Since June 2003, the airlines that report on-time data also report the causes of delays and cancellations to the Bureau of Transportation Statistics, and we used this dataset to compare delay for top 6 largest air carrier in USA.

Structure of Data:

```
## 'data.frame':	196403 obs. of  22 variables:
##  $ year               : int  2003 2003 2003 2003 2003 2003 2003 2003 2003 2003 ...
##  $ month              : int  6 6 6 6 6 6 6 6 6 6 ...
##  $ carrier            : Factor w/ 26 levels "9E","AA","AQ",..: 2 2 2 2 2 2 2 2 2 2 ...
##  $ carrier_name       : Factor w/ 28 levels "AirTran Airways Corporation",..: 5 5 5 5 5 5 5 5 5 5 ...
##  $ airport            : Factor w/ 377 levels "ABE","ABI","ABQ",..: 3 18 23 25 30 36 43 45 56 57 ...
##  $ airport_name       : Factor w/ 377 levels "Aberdeen, SD: Aberdeen Regional",..: 8 13 19 22 139 35 241 39 47 24 ...
##  $ arr_flights        : num  307 90 752 842 383 ...
##  $ arr_del15          : num  56 27 186 174 55 12 82 225 27 101 ...
##  $ carrier_ct         : num  14.68 7.09 33.99 60.24 14.9 ...
##  $ weather_ct         : num  10.79 2 27.82 20.54 8.91 ...
##  $ nas_ct             : num  19.1 10.8 104.8 47.8 14.6 ...
##  $ security_ct        : num  1.48 0 1.9 4.69 0 1 0.03 2.25 0 0 ...
##  $ late_aircraft_ct   : num  9.96 7.16 17.53 40.75 16.61 ...
##  $ arr_cancelled      : num  1 0 5 9 0 0 2 7 1 1 ...
##  $ arr_diverted       : num  1 0 0 1 0 0 0 0 0 1 ...
##  $ arr_delay          : num  2530 1390 8314 8344 3137 ...
##  $ carrier_delay      : num  510 271 1367 3040 815 ...
##  $ weather_delay      : num  621 83 1722 1032 574 ...
##  $ nas_delay          : num  676 581 3817 1835 555 ...
##  $ security_delay     : num  25 0 139 115 0 35 1 45 0 0 ...
##  $ late_aircraft_delay: num  698 455 1269 2322 1193 ...
##  $ X                  : logi  NA NA NA NA NA NA ...
```


Summary of data:

```
##       year          month           carrier      
##  Min.   :2003   Min.   : 1.000   OO     : 19646  
##  1st Qu.:2006   1st Qu.: 4.000   EV     : 18297  
##  Median :2008   Median : 7.000   MQ     : 16781  
##  Mean   :2009   Mean   : 6.553   DL     : 15556  
##  3rd Qu.:2011   3rd Qu.:10.000   AA     : 11338  
##  Max.   :2015   Max.   :12.000   UA     : 10973  
##                                  (Other):103812  
##                        carrier_name       airport      
##  SkyWest Airlines Inc.       : 19646   LAX    :  2009  
##  ExpressJet Airlines Inc.    : 17641   LAS    :  2003  
##  Delta Air Lines Inc.        : 15556   PHX    :  1975  
##  American Eagle Airlines Inc.: 15404   DEN    :  1953  
##  Atlantic Southeast Airlines : 12159   SAN    :  1932  
##  American Airlines Inc.      : 11338   DTW    :  1926  
##  (Other)                     :104659   (Other):184605  
##                                         airport_name     arr_flights     
##  Los Angeles, CA: Los Angeles International   :  2009   Min.   :    1.0  
##  Las Vegas, NV: McCarran International        :  2003   1st Qu.:   62.0  
##  Phoenix, AZ: Phoenix Sky Harbor International:  1975   Median :  136.0  
##  Denver, CO: Denver International             :  1953   Mean   :  396.4  
##  San Diego, CA: San Diego International       :  1932   3rd Qu.:  287.0  
##  Detroit, MI: Detroit Metro Wayne County      :  1926   Max.   :20283.0  
##  (Other)                                      :184605                    
##    arr_del15         carrier_ct        weather_ct          nas_ct       
##  Min.   :   0.00   Min.   :   0.00   Min.   :  0.000   Min.   :  -0.01  
##  1st Qu.:  12.00   1st Qu.:   4.09   1st Qu.:  0.000   1st Qu.:   2.39  
##  Median :  27.00   Median :   9.90   Median :  0.750   Median :   7.00  
##  Mean   :  79.98   Mean   :  22.28   Mean   :  2.942   Mean   :  27.39  
##  3rd Qu.:  63.00   3rd Qu.:  21.75   3rd Qu.:  2.350   3rd Qu.:  18.02  
##  Max.   :6377.00   Max.   :1792.07   Max.   :717.940   Max.   :4091.27  
##  NA's   :38                                                             
##   security_ct      late_aircraft_ct  arr_cancelled       arr_diverted     
##  Min.   : 0.0000   Min.   :   0.00   Min.   :   0.000   Min.   :  0.0000  
##  1st Qu.: 0.0000   1st Qu.:   2.00   1st Qu.:   0.000   1st Qu.:  0.0000  
##  Median : 0.0000   Median :   6.94   Median :   1.000   Median :  0.0000  
##  Mean   : 0.1967   Mean   :  27.15   Mean   :   7.065   Mean   :  0.8856  
##  3rd Qu.: 0.0000   3rd Qu.:  18.97   3rd Qu.:   5.000   3rd Qu.:  1.0000  
##  Max.   :80.5600   Max.   :1885.47   Max.   :1969.000   Max.   :256.0000  
##                                                                           
##    arr_delay      carrier_delay    weather_delay       nas_delay     
##  Min.   :     0   Min.   :     0   Min.   :    0.0   Min.   :   -19  
##  1st Qu.:   549   1st Qu.:   191   1st Qu.:    0.0   1st Qu.:    81  
##  Median :  1376   Median :   492   Median :   33.0   Median :   256  
##  Mean   :  4369   Mean   :  1254   Mean   :  226.7   Mean   :  1230  
##  3rd Qu.:  3296   3rd Qu.:  1137   3rd Qu.:  175.0   3rd Qu.:   698  
##  Max.   :433687   Max.   :134693   Max.   :57707.0   Max.   :238440  
##                                                                      
##  security_delay     late_aircraft_delay    X          
##  Min.   :   0.000   Min.   :     0      Mode:logical  
##  1st Qu.:   0.000   1st Qu.:    99      NA's:196403   
##  Median :   0.000   Median :   399                    
##  Mean   :   7.301   Mean   :  1652                    
##  3rd Qu.:   0.000   3rd Qu.:  1184                    
##  Max.   :3119.000   Max.   :148181                    
## 
```

##Initial Analysis: EDA
Below chart shows my initial run to display the performance of US domestic flights in terms of their carrier delay. As you see, x shows the years and y shows average carrier delay based on minutes. Each line in the diagram shows the performance of a carrier. 

![Caption for the picture.](https://raw.githubusercontent.com/keymanesh/Udacity--Data-Visualization/master/img/AllFlightsDelay.JPG)

This is such a busy figure and obviously it is not efficient in delivering analysis. For the next step, I will pick only 6 airlines based on the arrival flights number. For the rest of this project I will only analyze and visualize data related to top largest air carrier at US.



## Final Visualizations
Now, we have all the performance information for following air carriers which are in fact the top largerst US domestic air carriers:


```
## [1] "American Airlines Inc."   "Delta Air Lines Inc."    
## [3] "ExpressJet Airlines Inc." "SkyWest Airlines Inc."   
## [5] "Southwest Airlines Co."   "United Air Lines Inc."
```

In this project the objective is to:

* Comparing the performance of Delta Air Lines Inc. with Other Carriers

In fact, during last five years **Delta Air Lines Inc.** has outperformed other US domestic carriers as it has less delay. More specifically:

* Delta Air Lines is now one of the best US carriers in terms of flight delay percentage
* It had less overal and carrier delay comparing to other airlines

To show the performance of carriers, I will aggregate data by *year* and *carrier name* and then I will add new features that are required to do above analysis.

To display the delay metrics over time, I will use combination of point (scatter plot) and line chart. Using point, I can precisly display the measure and audience can easily compare. Also, I will add lines to be able to show trends of the performance over year. This makes it easy to see how perfomance of each carrier changed over time. 




### Average Delay

Following figure shows how the average delay changed over time for each of the carriers.

![Caption for the picture.](https://raw.githubusercontent.com/keymanesh/Udacity--Data-Visualization/master/img/Top6_DelayMin.JPG)

As you can see the average delay per flight fluctuated between 5 and 17 mins. Over the last 4 years Delta Air Lines had the lowest delay comparing to other carriers.

### Percentage of Late Flights

Following figure shows percentage of late flights for each of the carrier. A flight is marked as late when it reaches its destination with delay of more than 15 minutes.

![Caption for the picture.](https://raw.githubusercontent.com/keymanesh/Udacity--Data-Visualization/master/img/Top6_DelayedPer.JPG)

Based on the diagram, the percentage for late flight is in range of 10 to 30%. As we can see in the line chart, Delta Airlines is doing very well comparing to other carriers in this department, especially for the last five years the percentage of its late flights is significantly lower than other carriers'.

### Percentage of On-Time Flights

Follwing figure is very similar to the previous figure. This one displays the on-time flights while the last one was showing the late flights. 

![Caption for the picture.](https://raw.githubusercontent.com/keymanesh/Udacity--Data-Visualization/master/img/Top6_OnTimePer.JPG)

### Average Delay due to Carrier

Delay in flights can come from different sources, such as carrier, security check, weather and etc. In following two figures we focus on only those delays which are due to carrier.

Following figure displays the average delay due to carrier per flight.  

![Caption for the picture.](https://raw.githubusercontent.com/keymanesh/Udacity--Data-Visualization/master/img/Top6_CarrierDelayMin.JPG)

As you can see, ExpressJet have had the highest delay for the last five years, while Southwest Airlines, Delta and Skywest Airlines were among the lowest in this category.

### Percentage of Late Flight due to Carrier

Following figure shows the percentage of flights that are late dure to carrier. 

![Caption for the picture.](https://raw.githubusercontent.com/keymanesh/Udacity--Data-Visualization/master/img/Top6_DelayedCarrierPerc.JPG)

As you can see Skywest was one of the worst between 2003-2008 but they managed to be one of the best for last 8 years. Also Delta Airlines is among the best for this category.



## Feedback
I showed the chart and diagrams to couple of my friends and here some ideas that I got and applied to improve my charts:

1- "Legends are distracting"

The legend was on the side and it took some spaces that I could use to enlarge my graph. So I used the empty space in the chart to put the legend


2- "Dependent value is vague and it is difficult to understand the measure or unit of the variable"

First I used propertion of on-time or late flights, instead of percentage. So the number for late flights were like .02 or .11 which were not as readable as percentage. I changed it to percentage.

3- "Based on data for On-Time flight rates chart, there is significant difference between carriers, however, the way you scaled the y axis doesn't really deliever the point! "

The range for percentage of on-time flight is between 70 and 90%. The diagram initially had y axis from (0 to 100%) which made a lot of empty space in the chart and also the difference of perfromance among the carriers were not really visible. I shortened the range from (0,100) to (60,90) so the difference would more obvious to eyes of the readers!

4- "The code is not scalable and it seems to be redundant"

The code was not really readable and scalable. I made it more modular so it will be easier to scale!

5- "Colors are not consistent and it makes it difficult to follow performance in different charts"

In each chart the line for each carrier was different so it made it a little bit difficult for the reader to follow a story. I fixed the color for each carrier for all of the charts.

6- "Since the code is large it is better to separate html, js and css from each other"

I separated javascript and css from html so the source code would follow best practices!

7- "Code is not readable, it is difficult to understand what each function do"

I added comments for different sections of my code so it will be more readable

8- "There is not a story behind the graphs. It is more Explpraatory than Explanatory"

In the new version, I focused on Delta Air Lines and how it performs comparing to other carriers. I believe Delta Air Lines is currently one of the best US Domestic Air Lines in terms of delay.


##References

* dimple.js Documentation
* Data Visualization with d3.js course at Udacity 
* Posts in Stack Overflow
* http://www.transtats.bts.gov/

## Data Source
Data is taken from the following website :
http://www.transtats.bts.gov/OT_Delay/OT_DelayCause1.asp?pn=1

data/airlines.csv contains the original data
data/summary_airlines.csv contains the cleaned and summarized data which was used for the project.


