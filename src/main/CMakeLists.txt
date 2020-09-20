cmake_minimum_required(VERSION 2.8) 
add_compile_options(-std=c++17)

add_executable (ekarta_server  
	main.cpp
	card.cpp
	session.cpp
	rpcInterface.cpp
	)
target_link_libraries (ekarta_server LINK_PUBLIC couchit simpleRpcServer simpleServer imtjson )
install(TARGETS ekarta_server DESTINATION "bin") 
