

add_custom_target(web_builder ALL 
	DEPENDS "utils/wappbuilder/wappbuild")	
add_custom_command(OUTPUT "utils/wappbuilder/wappbuild" "utils/wappbuilder/develweb.o"
	COMMAND $(MAKE) -C utils/wappbuilder wappbuild DEPENDS utils/wappbuilder/develweb.cpp)


file(MAKE_DIRECTORY res)
add_custom_target(web ALL)
add_custom_command(TARGET web POST_BUILD COMMAND $(MAKE) WEBLANG=cs -f web.mk)
add_custom_command(TARGET web POST_BUILD COMMAND $(MAKE) WEBLANG=en -f web.mk)


