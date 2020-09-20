/*
 * card.cpp
 *
 *  Created on: 17. 9. 2020
 *      Author: ondra
 */

#include <couchit/document.h>
#include <imtjson/value.h>
#include <main/card.h>
#include "merge.h"

using json::Value;

Card::Card(const PCouchDB &db, const json::StrViewA docId, CouchDB::Flags flgs)
	:couchit::Document(db->get(docId, flgs))
{
}

void Card::validate() const {

	auto fcode = (*this)["fcode"];
	auto ecode = (*this)["fcode"];
	auto validity = (*this)["validity"];
	auto credit = (*this)["credit"];
	auto receipt = (*this)["receipt"];
	auto identity = (*this)["identity"];
	auto product = (*this)["product"];
	auto owner = (*this)["owner"];
	auto discarded = (*this)["discarded"];

	if (fcode.hasValue() && fcode.type() != json::string) throw std::runtime_error("fcode is not string");
	if (ecode.hasValue() && ecode.type() != json::string) throw std::runtime_error("ecode is not string");
	if (validity.hasValue()) {
		if (validity.type() != json::object) throw std::runtime_error("validity missing");
		auto from = validity["from"];
		auto to = validity["to"];
		if (from.type() != json::number) throw std::runtime_error("validity.from must be number");
		if (to.type() != json::number) throw std::runtime_error("validity.to must be number");
		if (from.getNumber() >= to.getNumber()) throw std::runtime_error("validity.from  must be < then validty.to");
	} // if no validity yet - card is not active
	if (identity.hasValue() && identity.type() != json::string && identity.type() == json::object) {
		throw std::runtime_error("identity must be string or object");
	}
	if (credit.hasValue() && (credit.type() != json::number || credit.getNumber() < 0)) {
			throw std::runtime_error("invalid credit");
	}
	if (receipt.hasValue()){
		if (receipt.type() != json::object) throw std::runtime_error("receipt must be object");
		double total = 0;
		for (Value row: receipt) {
			auto time = row["time"];
			if (time != json::number) throw std::runtime_error("each item in receipt must have time=number");
			auto charge = row["charge"];
			if (charge != json::number) throw std::runtime_error("each item in receipt must have charge=number");
			double ch = charge.getNumber();
			if (ch <= 0) throw std::runtime_error("receipt.charge must be positive number");
			total += ch;
		}
		if (total > credit.getNumber()) {
			throw std::runtime_error("overspent");
		}
	}
	if (discarded.hasValue() && discarded.type() != json::boolean) throw std::runtime_error("discarded must be bool");
	if (owner.type()) throw std::runtime_error("owner must be string");
	if (product.type()) throw std::runtime_error("product must be string");
}

void Card::applyChanges(Value changes) {
	Value res = mergeObject(*this, changes,
			[&](const Value &trg, const Value &src) {
			if (src.getKey()=="_") return trg;
			MergeRecursive<void> mr;
			return mr(trg,src);
	});
	revert();
	setBaseObject(res);
	validate();
}

json::Value Card::getOwner() const {
	return (*this)["owner"];
}

