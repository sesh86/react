
	this.state = {
		firstname: '',
		lastname: '',
		telnum: '',
		email: '',
		agree: false,
		contactType: 'Tel.',
		message: '',
		touched:{
			firstname:false,
			lastname:false,
			telnum:false,
			email:false
		}
	};
		
	...
		
    handleBlur=(field)=>(e)=>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        });
    }

    validate(firstname,lastname,telnum,email){
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        }
        if(this.state.touched.firstname && firstname.length<3)
            errors.firstname='Firstname should be greater than or equal to 3 characters'
        if(this.state.touched.firstname && firstname.length>10)
            errors.firstname='Firstname should be less than or equal to 10 characters'
        if(this.state.touched.lastname && lastname.length<3)
            errors.lastname='Lastname should be greater than or equal to 3 characters'
        if(this.state.touched.lastname && lastname.length>10)
            errors.lastname='Lastname should be less than or equal to 10 characters'

        const reg=/^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum))
            errors.telnum='Telnum should contain only numbers'

        if(this.state.touched.email && email.split('').filter(x=>x==='@').length!==1)
            errors.email='Enter a valid email'

        return errors;
    }

	...
	
    render() {
	...
    let errors=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
	...
	