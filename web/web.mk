
all: index_$(WEBLANG).html	
 

%_$(WEBLANG).html: %.page
	utils/wappbuilder/wappbuild -L "src/$(WEBLANG).csv" -B "$(@:.html=_debug)" "$<"
	utils/wappbuilder/wappbuild -d "$(@:.html=.d)" -L "src/$(WEBLANG).csv" -G "src/missing_$(WEBLANG).csv" -B "$(@:.html=)" -c "$<"

-include index_$(WEBLANG).d
