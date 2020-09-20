/*
 * db.h
 *
 *  Created on: 17. 9. 2020
 *      Author: ondra
 */

#ifndef SRC_MAIN_DB_H_
#define SRC_MAIN_DB_H_

#include <couchit/couchDB.h>
#include <shared/ini_config.h>
#include <shared/refcnt.h>

class CouchDB: public couchit::CouchDB, public ondra_shared::RefCntObj {
public:

	using couchit::CouchDB::CouchDB;
	static couchit::Config initDB(const ondra_shared::IniConfig::Section &section);

};

using PCouchDB = ondra_shared::RefCntPtr<CouchDB>;


inline couchit::Config CouchDB::initDB(const ondra_shared::IniConfig::Section &section) {
	couchit::Config cfg;
	cfg.authInfo.username = section.mandatory["username"].getString();
	cfg.authInfo.password = section.mandatory["password"].getString();
	cfg.baseUrl = section.mandatory["url"].getString();
	cfg.databaseName = section.mandatory["name"].getString();
	return cfg;
}


#endif /* SRC_MAIN_DB_H_ */
