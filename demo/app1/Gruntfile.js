module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		clean: {
			all: ['dist/*']
		},
		copy: {
			lib: {
				files: [{
					expand: true, cwd:'', src: ['../lib/**'], dest: 'dist/lib'
				}]
			},
			html: {
				files: [{
					expand: true, cwd: 'src/main/html', src: ['*.html'], dest: 'dist/app/html'
				}]
			},
			image: {
				files: [
				//#region Code generation
				{
					expand: true, cwd: 'src/main/image', src: ['*.{png,jpg,jpeg,gif}'], dest: 'dist/app/image'
				}, 
				{
					expand: true, cwd: 'src/module1/image', src: ['*.{png,jpg,jpeg,gif}'], dest: 'dist/app/image'
				}
				//#endregion
				]
			}
		},
		less: {
			compile: {
				files: {
					//#region Code generation
					'src/main/css/main.css': 'src/main/css/main.less',
					'src/module1/css/module1.css': 'src/module1/css/module1.less'
					//#endregion
				}
			}
		},
		concat:{
			options: {
				separator: '\n\n',
				stripBanners: true
			},
			js:{
				src:['src/*/js/*.js'],
				dest:'dist/app/js/app.js'
			},
			css:{
				src:['src/*/css/*.css'],
				dest:'dist/app/css/app.css'
			}
		},
		uglify:{
			options:{
				banner:'/********************************************/\n' + 
					   '/****You can you up, no can no bb************/\n' +
					   '/********************************************/\n'
			},
			static_mappings:{
				files:[{
					src:'dist/app/js/app.js',
					dest:'dist/app/js/app.min.js'
				}]
			}
		},
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
				report: 'gzip'
            },
            target: {
                files: {
                    'dist/app/css/app.min.css': [
						'dist/app/css/app.css'
                    ]
                }
            }
        },
		imagemin: {
			prod: {
				options: {
					optimizationLevel: 7,
					pngquant: true
				},
				files: [{
					expand: true, cwd: 'dist/app/image', src: ['*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'dist/app/image'}
				]
			}
		},
		rev: {
			files: {
				src: ['dist/app/js/app.min.js', 'dist/app/css/app.min.css']
			}
		},
		usemin:{
			html: 'dist/app/html/*.html'
		}
    });
	
	//#region 不要删除,取巧的配置
	//require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	//#endregion
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.registerTask('default',['clean', 'copy', 'less', 'concat', 'uglify', 'cssmin', 'rev', 'usemin']);
}