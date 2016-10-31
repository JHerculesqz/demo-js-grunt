module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		clean: {
			all: ['dist/*']
		},
		less: {
			compile: {
				files: {
					//#region Code generation
					'src/core/core1/css/core1.css': 'src/core/core1/css/core1.less',
					'src/component/component1/css/component1.css': 'src/component/component1/css/component1.less',
					'src/widget/widget1/css/widget1.css': 'src/widget/widget1/css/widget1.less'
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
				src:['src/core/*/js/*.js', 'src/component/*/js/*.js', 'src/widget/*/js/*.js'],
				dest:'dist/walle/js/walle.js'
			},
			css:{
				src:['src/core/*/css/*.css', 'src/component/*/css/*.css', 'src/widget/*/css/*.css'],
				dest:'dist/walle/css/walle.css'
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
					src:'dist/walle/js/walle.js',
					dest:'dist/walle/js/walle.min.js'
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
                    'dist/walle/css/walle.min.css': [
						'dist/walle/css/walle.css'
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
					expand: true, cwd: 'dist/walle/image', src: ['*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'dist/walle/image'}
				]
			}
		},
		copy: {
			image: {
				files: [
				//#region Code generation
				{
					expand: true, cwd: 'src/core/core1/image', src: ['*.{png,jpg,jpeg,gif}'], dest: 'dist/walle/image'
				}, 
				{
					expand: true, cwd: 'src/component/component1/image', src: ['*.{png,jpg,jpeg,gif}'], dest: 'dist/walle/image'
				}, 
				{
					expand: true, cwd: 'src/widget/widget1/image', src: ['*.{png,jpg,jpeg,gif}'], dest: 'dist/walle/image'
				}
				//#endregion
				]
			},
			walle: {
				files: [{
					expand: true, cwd:'dist', src: ['walle/**'], dest: '../lib'
				}]
			}
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
    grunt.registerTask('default',['clean', 'less', 'concat', 'uglify', 'cssmin', 'copy']);
}