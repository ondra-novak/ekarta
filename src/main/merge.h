/*
 * merge.h
 *
 *  Created on: 18. 9. 2020
 *      Author: ondra
 */

#ifndef SRC_MAIN_MERGE_H_
#define SRC_MAIN_MERGE_H_
#include <imtjson/object.h>
#include <imtjson/objectValue.h>
#include <imtjson/value.h>

template<typename Fn>
json::Value mergeObject(const json::Value &trg, const json::Value &src, Fn &&fn) {
	auto objValue = json::ObjectValue::create(trg.size()+src.size());
	auto ti = trg.begin();
	auto si = src.begin();
	auto te = trg.end();
	auto se = src.end();
	while (ti != te && si != se) {
		auto tk = (*ti).getKey();
		auto sk = (*si).getKey();
		if (tk < sk) {
			objValue->push_back((*ti).getHandle());
			++ti;
		} else if (tk > sk) {
			json::Value mres = fn(json::undefined, *si);
			mres = mres.setKey(sk);
			objValue->push_back(mres.getHandle());
			++si;
		} else {
			json::Value mres = fn(*ti, *si);
			mres = mres.setKey(sk);
			objValue->push_back(mres.getHandle());
			++si;
			++ti;
		}
	}
	while (ti != te) {
		objValue->push_back((*ti).getHandle());
		++ti;
	}
	while (si != se) {
		json::Value mres = fn(json::undefined, *si);
		mres = mres.setKey((*si).getKey());
		objValue->push_back(mres.getHandle());
		++si;
	}
	return json::Value(json::PValue::staticCast(objValue));
}

template<typename MapFn>
class MergeRecursive {
public:
	MergeRecursive(MapFn &&fn):fn(std::move(fn)) {}

	json::Value operator()(const json::Value &trg, const json::Value &src) const {
		if (trg.type() == json::object && src.type() == json::object) {
			return mergeObject(trg, src, MergeRecursive(fn));
		} else {
			return fn(trg, src);
		}
	}
	MapFn &&fn;
};

template<>
class MergeRecursive<void> {
public:
	json::Value operator()(const json::Value &trg, const json::Value &src) const {
		if (trg.type() == json::object && src.type() == json::object) {
			return mergeObject(trg, src, *this);
		} else {
			return src;
		}
	}
};



#endif /* SRC_MAIN_MERGE_H_ */

