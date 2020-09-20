/*
 * card.h
 *
 *  Created on: 17. 9. 2020
 *      Author: ondra
 */

#ifndef SRC_MAIN_CARD_H_
#define SRC_MAIN_CARD_H_
#include <couchit/document.h>
#include <main/db.h>



class Card: public couchit::Document  {
public:
	Card(const PCouchDB &db, const json::StrViewA docId, CouchDB::Flags flgs = 0);
	Card(const couchit::Document &doc):couchit::Document::Document(doc) {}

	void validate() const;

	void applyChanges(json::Value changes);
	json::Value getOwner() const;

	/*
	 * Platnost od-do
	 * Počet použití
	 * Kód karty
	 * Produkt
	 * Identita
	 *
	 *
	///validity
	void setValidity(const Validity &p);
	Validity getValidity() const;

	///set credit or count of spending
	void setCredit(double useCount);
	///get total credit
	double getTotalCredit() const;
	///get current credit
	double getCurrentCredit() const;
	///determine whether amount of credit can be spent
	bool canSpend(double amount = 1) const;
	///spend credit
	**
	 * @param time time of spend
	 * @param description description of service
	 * @param use
	 * @return
	 *
	bool spend(JSTime time, const json::StrViewA &description, double use = 1);
	bool spendArticle(JSTime time, const json::StrViewA &articleId, double count, double total, double surcharge);
	json::Value getReceipt() const;

*	SafeCode getCardID() const;
	void setCardID(const SafeCode &code);
	Identity getIdentity() const;
	void setIdentity(const Identity &identity);
*/
};

#endif /* SRC_MAIN_CARD_H_ */
