//!require ../libs/rpc.js
//!require ../libs/pouchdb.min.js

class Sync {
	constructor(db, rpc) {
		this.db = db;
		this.rpc = rpc;		
	}
	
	async sync() {
		let objects = await this.rpc.Client.list();
		let objnames = Object.keys(objects);
		let curobjects = await this.db.allDocs({keys: objnames, include_docs:true});
		let to_download=[];
		let cur_revs = {};
		curobjects.rows.forEach((rw)=>{
			var o = objects[rw.key];
			var rev = rw.doc && rw.doc.current && rw.doc.current._rev;
			if (o != rev) to_download.push(rw.key);
			if (rw.value) cur_revs[rw.key] = rw.value.rev;
		});
		if (to_download.length) {
			let download = await this.rpc.Client.get.apply(this, to_download);
			let bulk_upload = [];
			for (let k in download ) {
				let doc = {"_id":k, "current":download[k]}
				if (cur_revs[k]) doc._rev = cur_revs[k];
				bulk_upload.push(doc);
			}
			return this.db.bulkDocs(bulk_upload);
		} else {
			return null;
		}
	}
}

