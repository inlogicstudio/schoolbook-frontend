import Api from './Api'

export default {

    all (form) {
        return Api.post('/admin/students', form)
    },

    me (id) {
  	    return Api.get(`/admin/students/bio/${id}`)
    },

    studentFees(form) {
    	return Api.post('admin/students/fee', form)
    },

    create (form) {
    	return Api.post('admin/students/create', form, { 
                headers: { 'Content-Type': 'multipart/form-data' } 
        })
    },

    update (form) {
    	return Api.post('admin/students/update', form, { 
                headers: { 'Content-Type': 'multipart/form-data' } 
        })
    },

    assignedGuardians (id) {
        return Api.get(`admin/students/${id}/guardians`)
    } 
}
