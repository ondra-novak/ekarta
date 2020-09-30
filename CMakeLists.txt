cmake_minimum_required(VERSION 2.8)
project (ekarta)

EXEC_PROGRAM(uname OUTPUT_VARIABLE SYSTEM_NAME)
SET(SYSTEM_NAME "${SYSTEM_NAME}" CACHE INTERNAL "")

IF(SYSTEM_NAME STREQUAL "Linux")
   MESSAGE("-- Detected Linux system")
   LINK_LIBRARIES( stdc++fs)
ENDIF(SYSTEM_NAME STREQUAL "Linux")

IF(SYSTEM_NAME STREQUAL "FreeBSD")
   MESSAGE("-- Detected FreeBSD system")
   LINK_LIBRARIES(execinfo)   
ENDIF(SYSTEM_NAME STREQUAL "FreeBSD")
LINK_LIBRARIES(ssl crypto pthread)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/bin/)

include_directories(BEFORE src/imtjson/src src/simpleServer/src src/couchit/src src )
add_compile_options(-std=c++17)
add_compile_options(-Wall -Wno-noexcept-type)

add_subdirectory (src/imtjson/src/imtjson EXCLUDE_FROM_ALL)
add_subdirectory (src/simpleServer/src/simpleServer EXCLUDE_FROM_ALL)
add_subdirectory (src/simpleServer/src/rpc EXCLUDE_FROM_ALL)
add_subdirectory (src/couchit/src/couchit EXCLUDE_FROM_ALL)
add_subdirectory (src/main)
add_subdirectory (web)

install(DIRECTORY conf DESTINATION ".") 
install(DIRECTORY www DESTINATION ".") 
install(DIRECTORY DESTINATION "data")
install(DIRECTORY DESTINATION "log")
